const start = document.querySelector("button#start");
start.addEventListener("click", (e) => {
    e.preventDefault();
    let [cL, cT] = [64, 0];
    const ball = window.open("", "", `width=100,height=100,left=${cL}, top=${cT}`);
    console.log(screen.height);
    let [cLMultiplier, cTMultiplier] = [2, 2];
    const moveBall = setInterval(() => {
        if (cL >= screen.width - 164 || cL < 64) {
            cLMultiplier = cLMultiplier * -1;
        }
        if (cT >= screen.height - 170 || cT < 0) {
            cTMultiplier *= -1;
        }

        [cL, cT] = [cL + cLMultiplier, cT + cTMultiplier];
        ball.moveTo(cL, cT);
    }, 5);
});
