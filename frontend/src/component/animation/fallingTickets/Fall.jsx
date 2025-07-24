import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";

const FallingImages = ({
  imageUrls = [],
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  imageWidth = "50px",
  imageHeight = "50px",
  pause = false, // 👈 NEW PROP
}) => {
  const containerRef = useRef(null);
  const imagesRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const engineRef = useRef(null); // 👈 store engine
  const [effectStarted, setEffectStarted] = useState(false);
  const [computedSizes, setComputedSizes] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const parseSize = (size, dim) =>
      size.includes("%") ? (parseFloat(size) / 100) * dim : parseFloat(size);
    setComputedSizes({
      width: parseSize(imageWidth, containerRect.width),
      height: parseSize(imageHeight, containerRect.height),
    });
  }, [imageWidth, imageHeight]);

  useEffect(() => {
    if (!imagesRef.current || !imageUrls.length || !computedSizes.width) return;

    const html = imageUrls
      .map(
        (url, i) =>
          `<img src="${url}" style="width:${computedSizes.width}px;height:${computedSizes.height}px" class="inline-block mx-[2px] select-none" />`
      )
      .join("");
    imagesRef.current.innerHTML = html;
  }, [imageUrls, computedSizes]);

  useEffect(() => {
    if (trigger === "auto") {
      setEffectStarted(true);
    } else if (trigger === "scroll" && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted || !computedSizes.width) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } =
      Matter;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    const engine = Engine.create();
    engineRef.current = engine;
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes,
      },
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };
    const floor = Bodies.rectangle(
      width / 2,
      height + 25,
      width,
      50,
      boundaryOptions
    );
    const leftWall = Bodies.rectangle(
      -25,
      height / 2,
      50,
      height,
      boundaryOptions
    );
    const rightWall = Bodies.rectangle(
      width + 25,
      height / 2,
      50,
      height,
      boundaryOptions
    );
    const ceiling = Bodies.rectangle(
      width / 2,
      -25,
      width,
      50,
      boundaryOptions
    );

    const imageElements = imagesRef.current.querySelectorAll("img");
    const imageBodies = [...imageElements].map((elem) => {
      const rect = elem.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(
        x,
        y,
        computedSizes.width,
        computedSizes.height,
        {
          render: { fillStyle: "transparent" },
          restitution: 0.8,
          frictionAir: 0.01,
        }
      );
      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 5, y: 0 });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
      return { elem, body };
    });

    imageBodies.forEach(({ elem, body }) => {
      elem.style.position = "absolute";
      elem.style.transform = "translate(-50%, -50%)";
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ceiling,
      mouseConstraint,
      ...imageBodies.map((ib) => ib.body),
    ]);

    const runner = Runner.create();
    Render.run(render);
    Runner.run(runner, engine);

    const updateLoop = () => {
      if (!pause) {
        imageBodies.forEach(({ body, elem }) => {
          const { x, y } = body.position;
          elem.style.left = `${x}px`;
          elem.style.top = `${y}px`;
          elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        });
        Matter.Engine.update(engine);
      }
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [
    effectStarted,
    gravity,
    wireframes,
    backgroundColor,
    mouseConstraintStiffness,
    computedSizes,
    pause,
  ]);

  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-full text-center overflow-hidden cursor-pointer"
    >
      <div ref={imagesRef} className="inline-block" />
      <div className="absolute top-0 left-0 z-0 " ref={canvasContainerRef} />
    </div>
  );
};

export default FallingImages;
