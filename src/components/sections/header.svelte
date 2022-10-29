<script>
	import About from './contact.svelte';
	const handleClose = () => {
		const ham = document.getElementById('hamburger');
		console.log(ham);
		ham.style.display = 'none';
	};
	const handleOpen = () => {
		const ham = document.getElementById('hamburger');
		console.log(ham);
		ham.style.display = 'block';
	};
</script>

<nav class="sticky bg-white top-0" id="nav">
   
	<div class="container mx-auto md:pt-11 py-8 px-10 md:px-4 flex">
		<div class="md:w-1/3">
			<p class="libre text-xl">&copy;Portfolio</p>
			<!-- <img alt="ridox logo" src="../../ridox-header-logo.png" /> -->
		</div>
		<div class="md:w-1/3 md:flex hidden justify-center">
			<ul class="md:flex hidden gap-20 text-[11px]">
				<li><a href="#landing"> Home</a></li>
				<li><a href="#blog"> Blog posts</a></li>
				<li><a href="#work"> Work</a></li>
				<li><a href="#contact"> Contact</a></li>
			</ul>
		</div>
		<div class="md:hidden ml-auto">
			<div class="cursor-pointer w-10 mt-1 libre text-xs" on:keydown on:click={handleOpen}>
				MENU
			</div>
		</div>
		<div
			id="hamburger"
			class="hidden bg-white absolute top-0 right-0 w-2/3 h-screen border-[1px] border-black"
		>
			<div class="flex w-full justify-end">
				<div class="w-5 mt-8 mr-12" on:keydown on:click={handleClose}>
					<img src="../../close.png" alt="close" />
				</div>
			</div>
			<div class=" w-full mt-20 flex justify-center items-center">
				<ul class="text-lg libre flex flex-col gap-7">
					<li><a href="#landing" on:click={handleClose}> Home</a></li>
					<li><a href="#blog" on:click={handleClose}> Blog post</a></li>
					<li><a href="#work" on:click={handleClose}> Work</a></li>
					<li><a href="#contact" on:click={handleClose}> Contact</a></li>
				</ul>
			</div>
		</div>
	</div>
</nav>
