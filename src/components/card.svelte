<script>
    export let card
</script>
<div class="border-[1px] border-black py-10 px-6 md:w-[400px] w-[250px] mx-5  flex flex-col justify-between">
    <div class="text-center">
        <h4 class="libre text-2xl">{card.plan}</h4>
        <p class=" mt-1 text-sm font-bold">{card.description}</p>
    </div>
    <div class="flex flex-col justify-center items-center">
        <p class="text-xs text-center">{card.price}</p>
        <!-- <button><a href="http://wa.me/2348089849241">Link</a></button> -->
    </div>
</div>