document.addEventListener("DOMContentLoaded", function() {
    const arts = [
        { id: 1, title: "Mechanical Arm", tags: ["robotic", "mechanical", "arm"], image: "RoboArm.gif", game: "Random" },
        { id: 2, title: "Box", tags: ["box", "crate", "container"], image: "Box.gif", game: "Random" },
        { id: 3, title: "First Aid Kit", tags: ["first aid", "health", "medical"], image: "Medkit2.gif", game: "Random" },
        { id: 4, title: "Farm with Silos", tags: ["farm", "agriculture", "silos"], image: "Farm.gif", game: "Random" },
        { id: 5, title: "Day 1: Mina", tags: ["noita", "character", "wizard", "mage", "wand"], image: "Day1.gif", game: "Noita" },
        { id: 6, title: "Day 2: Hamis", tags: ["noita", "character", "spider", "animal","eye"], image: "Day2.gif", game: "Noita" },
        { id: 7, title: "Day 3: Hurtta", tags: ["noita", "character", "dog", "animal"], image: "Day3.gif", game: "Noita" },
        { id: 8, title: "Day 4: Jättilaser-lennokki", tags: ["noita", "character", "robotic", "mechanical", "laser", "drone"], image: "Day4.gif", game: "Noita" },
        { id: 9, title: "Day 5: Lepakko", tags: ["noita", "character", "bat", "animal", "cute"], image: "Day5.gif", game: "Noita" },
        { id: 10, title: "Day 6: Puska", tags: ["noita", "character", "flower", "plant", "jungle"], image: "Day6.gif", game: "Noita" },
        { id: 11, title: "Day 7: Laahustussieni", tags: ["noita", "character", "mushroom", "plant"], image: "Day7.gif", game: "Noita" },
        { id: 12, title: "Day 8: Toveri & Kauhuhirviö", tags: ["noita", "character", "friend", "horror monster"], image: "Day8.gif", game: "Noita" },
        { id: 13, title: "Day 9: Ukko", tags: ["noita", "character", "electricity", "thunder", "elemental"], image: "Day9.gif", game: "Noita" },
        { id: 14, title: "Day 10: Stevari", tags: ["noita", "character", "god", "wizard", "mage", "skeleton", "wand","bones","skull"], image: "Day10.gif", game: "Noita" },
        { id: 15, title: "Day 11: Sokaisunmestari", tags: ["noita", "character", "wizard", "faceless", "mage"], image: "Day11.gif", game: "Noita" },
        { id: 16, title: "Day 12: Limanuljaska", tags: ["noita", "character", "slime", "sludge", "acid"], image: "Day12.gif", game: "Noita" },
        { id: 17, title: "Day 13: Peitsivartija", tags: ["noita", "character", "guard", "spear", "masked", "robot"], image: "Day13.gif", game: "Noita" },
        { id: 18, title: "Day 14: Music Machine", tags: ["noita", "character", "music", "instrument", "crystal key"], image: "Day14.gif", game: "Noita" },
        { id: 19, title: "Day 15: Sampo", tags: ["noita", "character", "grinder", "millstone", "myth", "finnish", "magic", "artifact"], image: "Day15.gif", game: "Noita" },
        { id: 20, title: "Day 16: Turso", tags: ["noita", "character", "squid", "animal"], image: "Day16.gif", game: "Noita" },
        { id: 21, title: "Day 17: Black Hole", tags: ["noita", "character", "space", "magic", "spell"], image: "Day17.gif", game: "Noita" },
        { id: 22, title: "Day 18: Matkija", tags: ["noita", "character", "mimic", "chest", "trap"], image: "Day18.gif", game: "Noita" },
        { id: 23, title: "Day 19: KK-Tannki", tags: ["noita", "character", "turret", "robot", "mechanical", "gun"], image: "Day19.gif", game: "Noita" },
        { id: 24, title: "Day 20: Lammas", tags: ["noita", "character", "animal", "sheep", "wool", "cute"], image: "Day20.gif", game: "Noita" },
        { id: 25, title: "Day 21: Kolmisilmän silmä", tags: ["noita", "character", "robot", "mechanical", "laser", "spider"], image: "Day21.gif", game: "Noita" },
        { id: 26, title: "Day 22: Lava Lake", tags: ["noita", "environment", "place","scenery", "emerald tablet", "skull"], image: "Day22.gif", game: "Noita" },
        { id: 27, title: "Day 23: Kolmisilmän Koipi", tags: ["noita", "character", "slime", "skull", "bones", "meat", "flesh"], image: "Day23.gif", game: "Noita" },
        { id: 28, title: "Day 24: Nuke", tags: ["noita", "character", "kaboom", "bomb", "explosive"], image: "Day24.gif", game: "Noita" },
        { id: 29, title: "Day 25: Paha Silmä", tags: ["noita", "item", "birthday", "eye", "object", "laser"], image: "Day25.gif", game: "Noita" },
        { id: 30, title: "Day 26: Korjauslennokki", tags: ["noita", "character", "repair drone", "repair", "medic", "healer", "drone", "robot", "mechanical"], image: "Day26.gif", game: "Noita" },
        { id: 31, title: "Day 27: Jättimato", tags: ["noita", "character", "worm", "insect","animal"], image: "Day27.gif", game: "Noita" },
        { id: 32, title: "Day 28: Hahmonvaihtaja", tags: ["noita", "character", "mage", "shapeshifter", "ghost", "spirit"], image: "Day28.gif", game: "Noita" },
        { id: 33, title: "Day 33: Puistokemisti", tags: ["noita", "character", "alchemist", "potion"], image: "Day33.gif", game: "Noita" },
        { id: 34, title: "Day 34: Circle of Vigour", tags: ["noita", "character", "circle", "vigor", "health","spell"], image: "Day34.gif", game: "Noita" },
        { id: 35, title: "Day 35: The Cauldron", tags: ["noita", "environment", "place","cauldron", "potion", "brew"], image: "Day35.gif", game: "Noita" },
        { id: 36, title: "Day 36: Karl the Mighty, First of its Name, Mover of Suns, and Friend to All", tags: ["noita", "character", "mighty", "friend", "sun"], image: "Day36.gif", game: "Noita" },
        { id: 37, title: "Day 37: Fungal Caverns", tags: ["noita", "environment", "place","fungal", "cavern", "mushroom"], image: "Day37.gif", game: "Noita" },
        { id: 38, title: "Day 38: Turvalennokki", tags: ["noita", "character", "drone", "security", "robot"], image: "Day38.gif", game: "Noita" },
        { id: 39, title: "Day 39: Toukka", tags: ["noita", "character", "larva", "worm", "insect","animal"], image: "Day39.gif", game: "Noita" },
        { id: 40, title: "Day 40: Jättikonna", tags: ["noita", "character", "giant", "frog", "animal"], image: "Day40.gif", game: "Noita" },
        { id: 41, title: "Day 41: Tapion vasalli", tags: ["noita", "character", "vessel", "deer", "animal","god","myth"], image: "Day41.gif", game: "Noita" },
        { id: 42, title: "Day 42: Sähikäismenninkäinen", tags: ["noita", "character", "spark", "goblin", "bomb"], image: "Day42.gif", game: "Noita" },
        { id: 43, title: "Day 43: Rotta", tags: ["noita", "character", "rat", "animal"], image: "Day43.gif", game: "Noita" },
        { id: 44, title: "Day 44: Taikasauva", tags: ["noita", "character", "wand", "magic", "item"], image: "Day44.gif", game: "Noita" },
        { id: 45, title: "Day 45: Tuonelankone", tags: ["noita", "character", "machine", "mechanical", "robot"], image: "Day45.gif", game: "Noita" },
        { id: 46, title: "Day 46: Mestarien mestari", tags: ["noita", "character", "master of masters", "champion","knight"], image: "Day46.gif", game: "Noita" },
        { id: 47, title: "Day 47: Tulikärpänen", tags: ["noita", "character", "firefly", "insect", "glow"], image: "Day47.gif", game: "Noita" },
        { id: 48, title: "Day 48: Aave", tags: ["noita", "character", "ghost", "spirit"], image: "Day48.gif", game: "Noita" },
        { id: 49, title: "Day 49: Kiukkukalma", tags: ["noita", "character", "angry", "corpse","ghost","spirit", "zombie"], image: "Day49.gif", game: "Noita" },
        { id: 50, title: "Day 50: Skoude", tags: ["noita", "character", "skeleton", "bones","skull","god"], image: "Day50.gif", game: "Noita" },
        { id: 51, title: "Day 51: Möykky", tags: ["noita", "character", "blob", "slime"], image: "Day51.gif", game: "Noita" },
        { id: 52, title: "Day 52: The Hiisi Drill", tags: ["noita","item", "machine", "drill", "hiisi"], image: "Day52.gif", game: "Noita" },
        { id: 53, title: "Day 53: Kolmisilmän sydän", tags: ["noita", "character","meat","horror","spider", "heart", "three eyes"], image: "Day53.gif", game: "Noita" },
        { id: 54, title: "Day 54: The Pyramid", tags: ["noita", "environment", "place","pyramid", "desert"], image: "Day54.gif", game: "Noita" },
        { id: 55, title: "Day 55: The Hiisi Anvil", tags: ["noita", "environment", "place","anvil", "hiisi"], image: "Day55.png", game: "Noita" },
        { id: 56, title: "Day 56: Explosive Box", tags: ["noita", "item","prop", "box", "explosive"], image: "Day56-1.gif", game: "Noita" },
        { id: 57, title: "Day 56: Gunpowder Crate", tags: ["noita", "item","prop", "box","explosive", "gunpowder"], image: "Day56-2.gif", game: "Noita" },
        { id: 58, title: "Day 56: Oil Barrel", tags: ["noita", "item","prop", "barrel", "oil","explosive"], image: "Day56-3.gif", game: "Noita" },
        { id: 59, title: "Day 56: Propane Tank", tags: ["noita", "item","prop", "tank", "propane","explosive"], image: "Day56-4.gif", game: "Noita" },
        { id: 60, title: "Day 56: Toxic Barrel", tags: ["noita", "item","prop", "barrel", "toxic","explosive"], image: "Day56-5.gif", game: "Noita" },
        { id: 61, title: "Day 57: Holy Bomb", tags: ["noita", "item","prop", "bomb", "holy","explosive"], image: "Day57.gif", game: "Noita" },
        { id: 62, title: "Day 58: Reroll Machine", tags: ["noita", "item","prop", "machine", "reroll","balance","statue"], image: "Day58.gif", game: "Noita" },
        { id: 63, title: "Day 59: Märkiäinen", tags: ["noita", "character", "marsh", "creature","swamp","elemental"], image: "Day59.gif", game: "Noita" },
        { id: 64, title: "Day 60: Varjokupla", tags: ["noita", "character", "shadow", "bubble","gas"], image: "Day60.gif", game: "Noita" },
        { id: 65, title: "Day 61: Ankka", tags: ["noita", "character", "duck", "animal"], image: "Day61.gif", game: "Noita" },
        { id: 66, title: "Day 62: Hohtonaamio", tags: ["noita", "character", "horror", "mask","tragedy"], image: "Day62.gif", game: "Noita" },
        { id: 67, title: "Day 63: Kammi", tags: ["noita", "item", "rock","stone","pebble"], image: "Day63.gif", game: "Noita" },
        { id: 68, title: "Day 64: Kammi Hut", tags: ["noita", "environment", "place","hut"], image: "Day64.gif", game: "Noita" },
        { id: 69, title: "Day 65: Ukkoskivi", tags: ["noita", "character", "thunder", "stone","rock","pebble"], image: "Day65.gif", game: "Noita" },
        { id: 70, title: "Day 66: Epäalkemisti", tags: ["noita", "character", "alchemist","failed","fallen"], image: "Day66.gif", game: "Noita" },
        { id: 71, title: "Day 67: Haulikkohiisi", tags: ["noita", "character", "shotgun", "hiisi"], image: "Day67.gif", game: "Noita" },
        { id: 72, title: "Day 68: Avarice Diamond", tags: ["noita", "environment", "place","diamond", "avarice"], image: "Day68.gif", game: "Noita" },
        { id: 73, title: "Day 69: Stendari", tags: ["noita", "character", "fire","elemental"], image: "Day69.gif", game: "Noita" },
        { id: 74, title: "Day 70: Egg of Technology", tags: ["noita", "environment", "myth","finnish","robot","mechanical","chest"], image: "Day70.gif", game: "Noita" },
        { id: 75, title: "Day 71: Firebolt", tags: ["noita", "spell", "flame","explosion","smoke","glow","kaboom"], image: "Day71.gif", game: "Noita" },
        { id: 76, title: "Day 72: Happonuljaska", tags: ["noita", "character", "slime","sludge","acid","eye"], image: "Day72.gif", game: "Noita" },
        { id: 77, title: "Day 73: The Moon", tags: ["planet", "environment", "orbit","celestial","space","cheese"], image: "Day73.gif", game: "Noita" },
        { id: 78, title: "Galaxy", tags: ["planet", "environment", "orbit","celestial","space","star","super nova"], image: "GalaxyHD.gif", game: "None" },
        { id: 77, title: "Day 74: Eväkäs", tags: ["character", "fish", "water","swimming","flow"], image: "Day74.gif", game: "Noita" },
        { id: 77, title: "Day 75: Heinäsirkka", tags: ["character", "robot", "mechanical","walking","electric","drone"], image: "Day75.gif", game: "Noita" },
        { id: 77, title: "Day 76: Kammolukki", tags: ["character", "creepy", "tooth","spider","disturbing","teeth"], image: "Day76.gif", game: "Noita" }
        // Add more arts here
    ];

    const gallery = document.getElementById("art-gallery");
    const filterInput = document.getElementById("filter");

    function displayArts(filteredArts) {
        gallery.innerHTML = '';
        filteredArts.forEach(art => {
            const artItem = document.createElement("div");
            artItem.classList.add("art-item");
            artItem.innerHTML = `
                <img src="${art.image}" alt="${art.title}">
                <p>${art.title}</p>
            `;
            gallery.appendChild(artItem);

            // Add click event listener to each image for fullscreen
            const img = artItem.querySelector("img");
            img.addEventListener("click", function() {
                toggleFullScreen(img);
            });

            // Add hover event listeners to manage transparency
            artItem.addEventListener('mouseenter', () => {
                document.querySelectorAll('.art-item').forEach(item => {
                    if (item !== artItem) {
                        item.classList.add('inactive');
                    }
                });
            });

            artItem.addEventListener('mouseleave', () => {
                document.querySelectorAll('.art-item').forEach(item => {
                    item.classList.remove('inactive');
                });
            });
        });
    }

    function toggleFullScreen(img) {
        if (!document.fullscreenElement) {
            img.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    filterInput.addEventListener("input", function() {
        const filterValue = filterInput.value.toLowerCase();
        const filterTags = filterValue.split(',').map(tag => tag.trim());
        const filteredArts = arts.filter(art => 
            filterTags.every(tag => art.tags.some(artTag => artTag.includes(tag))) ||
            art.title.toLowerCase().includes(filterValue)
        );
        displayArts(filteredArts);
    });

    displayArts(arts);
});
