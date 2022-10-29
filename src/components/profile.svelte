<script>
    export let profile  
</script>
<div class="flex flex-col justify-center items-center w-[200px] ">
    <!-- <div class="border-2 w-24 h-24 rounded-full">
        <img src="" alt="" srcset="">
    </div> -->
    <p class="text-lg mt-3">{profile.name}</p>
    <!-- <p class="text-xs">{profile.stack}</p> -->
    
    <div class="mt-5 flex gap-3">

        <div class="w-[40px] md:w-[50px]"><a  target="__blank" href={profile.github}><img src="../../github.png" alt="Github logo"></a></div>
        <div class="w-[40px] md:w-[50px]"><a  target="__blank" href={profile.twitter}><img src="../../twitter.png" alt="Twitter logo"></a></div>
    </div>
</div>