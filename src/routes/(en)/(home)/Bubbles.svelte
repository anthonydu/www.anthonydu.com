<script lang="ts">
	import Matter from 'matter-js';
	// @ts-ignore
	import MatterAttractors from 'matter-attractors';
	import { onMount } from 'svelte';
	import theme from 'tailwindcss/defaultTheme';

	export let words: string[];

	let parent: HTMLElement;

	onMount(() => {
		// create engine, render
		Matter.use(MatterAttractors);
		const engine = Matter.Engine.create({ gravity: { scale: 0 } });
		const render = Matter.Render.create({
			element: parent,
			engine: engine,
			options: {
				wireframes: false,
				background: 'black'
			}
		});

		// create attractive body
		const attractiveBody = Matter.Bodies.circle(
			0,
			0,
			0,
			{
				isStatic: true,
				plugin: {
					attractors: [
						(bodyA: Matter.Body, bodyB: Matter.Body) => {
							return {
								x: (bodyA.position.x - bodyB.position.x) * 1e-4,
								y: (bodyA.position.y - bodyB.position.y) * 1e-4
							};
						}
					]
				}
			},
			1
		);

		// create circles and words
		const circleWords: { circle: Matter.Body; p: HTMLElement }[] = [];
		for (const word of words) {
			const circle = Matter.Bodies.circle(
				Math.floor(Math.random() * window.innerWidth),
				Math.floor(Math.random() * window.innerHeight),
				100,
				{
					render: {
						fillStyle: 'transparent',
						strokeStyle: 'white',
						lineWidth: 1.5
					}
				},
				32
			);
			const p = document.createElement('p');
			p.innerHTML = word;
			p.classList.add(
				'absolute',
				'text-4xl',
				'text-center',
				'leading-[1.2]',
				'-translate-x-1/2',
				'-translate-y-1/2',
				'pointer-events-none',
				'w-max'
			);
			parent.appendChild(p);
			circleWords.push({ circle, p });
		}
		Matter.Composite.add(engine.world, [attractiveBody, ...circleWords.map((pair) => pair.circle)]);
		Matter.Events.on(engine, 'beforeUpdate', function () {
			for (const { circle, p } of circleWords) {
				p.style.left = circle.position.x + 'px';
				p.style.top = circle.position.y + 'px';
			}
		});

		// create mouse and mouseConstraint
		const mouse = Matter.Mouse.create(parent);
		const mouseConstraint = Matter.MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				render: {
					visible: false
				}
			}
		});
		mouse.element.removeEventListener('mousewheel', (mouse as any).mousewheel);
		mouse.element.removeEventListener('DOMMouseScroll', (mouse as any).mousewheel);
		mouse.element.removeEventListener('touchmove', (mouse as any).mousemove);
		mouse.element.removeEventListener('touchstart', (mouse as any).mousedown);
		mouse.element.removeEventListener('touchend', (mouse as any).mouseup);
		Matter.Composite.add(engine.world, mouseConstraint);

		// render and run
		Matter.Render.run(render);
		const runner = Matter.Runner.create();
		Matter.Runner.run(runner, engine);

		// add resize listener
		window.addEventListener('resize', () => {
			Matter.Body.setPosition(attractiveBody, {
				x: window.innerWidth * (window.innerWidth < parseInt(theme.screens.sm) ? 0.5 : 0.66),
				y: window.innerHeight * 0.5
			});
			render.options.width = parent.clientWidth;
			render.options.height = parent.clientHeight;
			Matter.Render.setPixelRatio(render, window.devicePixelRatio);
		});
		window.dispatchEvent(new Event('resize'));

		// add touch listener
		parent.addEventListener('touchstart', (e) => {
			mouse.button = -1;
			const offsetX = e.touches[0].clientX - parent.offsetLeft;
			const offsetY = e.touches[0].clientY - parent.offsetTop;
			for (const circle of circleWords.map((pair) => pair.circle)) {
				const distance = Math.hypot(circle.position.x - offsetX, circle.position.y - offsetY);
				if (distance <= circle.circleRadius!) {
					mouse.element.addEventListener('touchmove', (mouse as any).mousemove);
					mouse.element.addEventListener('touchstart', (mouse as any).mousedown);
					mouse.element.addEventListener('touchend', (mouse as any).mouseup);
					break;
				}
			}
		});
		mouse.element.addEventListener('touchend', () => {
			mouse.element.removeEventListener('touchmove', (mouse as any).mousemove);
			mouse.element.removeEventListener('touchstart', (mouse as any).mousedown);
			mouse.element.removeEventListener('touchend', (mouse as any).mouseup);
		});
	});
</script>

<div class="relative h-full w-full font-iceberg" bind:this={parent}></div>
