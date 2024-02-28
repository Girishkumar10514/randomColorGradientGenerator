let colors = [0, 0, 0, 0];
let page = document.getElementById("page_div");
let vibrant_colors = ["#40E0D0", "#DA70D6", "#4682B4", "#FF7F50", "#87CEEB", "#9370DB", "#8FBC8F", "#1E90FF", "#7B68EE", "#FF1493", "#98FB98", "#708090", "#DAA520", "#B22222", "#008080", "#9932CC", "#FF6347", "#66CDAA", "#CD853F", "#4169E1", "#008B8B", "#F4A460", "#C71585", "#6B8E23", "#DB7093", "#2F4F4F", "#3CB371", "#D2691E", "#48D1CC", "#CD5C5C"];

function color_generator() {
    console.log("click");
    console.log(vibrant_colors.length);
    for (let i = 0; i < 4; i++) {
        // const random_int = Math.floor(Math.random() * 16777216);
        // const hex_color = '#' + random_int.toString(16).padStart(6, '0');
        const r_index = Math.floor(Math.random()*30);
        colors[i] = vibrant_colors[r_index];
    }

    // Use percentages for smoother transition
    page.style.backgroundImage = `linear-gradient(45deg, ${colors[0]} 0%, ${colors[1]} 25%, ${colors[2]} 50%, ${colors[3]} 100%)`;
}

let button = document.getElementById("b01");
button.addEventListener('click', color_generator);
