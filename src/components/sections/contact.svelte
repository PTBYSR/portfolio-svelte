<script>
    import Profile from "../profile.svelte";

    export let profile = [
        {
            name: "paul.emechebe@gmail.com",
            stack: "Frontend developer",
            twitter: "https://twitter.com/ptbthefirst",
            // whatsapp: "",
            github: "https://github.com/PTBYSR",
        },
        {
            name: "Chibueze",
            stack: "Backend developer",
            twitter: "https://twitter.com/codad5_",
            // whatsapp: "",
            github: "https://github.com/codad5",
        }
    ]
</script>
<section id="contact" class="bg-black text-white">
    <div class="container mx-auto md:py-40 py-20 px-10">
        <div class="mb-20">
			<p class="text-xs mb-2 text-center">INQUIERIES</p>
			<h2 class="md:text-5xl text-4xl text-center">Looking for me?</h2>
		</div>
        <!-- <div class="flex justify-center items-center">
            <p class="md:w-1/2 text-xl text-center">We are a group of developers that believes owning a website should not be expensive. Period.</p>
        </div> -->
        <!-- <div class="text-center libre mt-20 text-2xl">
            <h3>The Team</h3>
        </div> -->
        <div class="flex justify-center items-center mt-20 md:gap-20">
            <Profile profile={profile[0]}/>
            <!-- <Profile profile={profile[1]}/> -->
        </div>
    </div>
</section>