<script>
    export let card
</script>
<a href={card.src} target="_blank" rel="noreferrer">
    <div class="border-[1px] border-black py-10 px-6 md:w-[400px] w-[250px] mx-5  flex flex-col justify-between">
        <p class=" mt-1 text-xs mb-3">{card.description}</p>
        <h4 class="libre md:text-lg">{card.plan}</h4>
            <p class="text-xs mt-2">{card.price}</p>
    </div>
</a>