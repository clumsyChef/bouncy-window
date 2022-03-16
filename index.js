const start = document.querySelector("button#start");

let allWindows = [];

start.addEventListener("click", (e) => {
    e.preventDefault();
    let [cL, cT] = [0, 0];
    const ball = window.open("", "", `width=100,height=100`);
    const [startX, startY] = [screen.width - ball.screen.availWidth, screen.height - ball.screen.availHeight];
    ball.moveTo(startX, startY);

    const [outer_height, outer_width] = [ball.screenTop, ball.screenLeft];
    let [cLMultiplier, cTMultiplier] = [1, 1];
    allWindows.push(ball);
    const moveBall = setInterval(() => {
        const thisBallNumber = allWindows.length - 1;
        if (cL > ball.screen.availWidth - 142 || cL < 0) {
            cLMultiplier = cLMultiplier * -1;
        }
        if (cT > ball.screen.availHeight - 128 || cT < 0) {
            cTMultiplier = cTMultiplier * -1;
        }

        const edges = {
            tL: { x: ball.screenLeft, y: ball.screenTop },
            tR: { x: ball.screenLeft + 100, y: ball.screenTop },
            bL: { x: ball.screenLeft, y: ball.screenTop + 100 },
            bR: { x: ball.screenTop + 100, y: ball.screenLeft + 100 },
        };

        allWindows.forEach((elem, ind) => {
            if (ind != thisBallNumber) {
                const thisEdges = {
                    tL: { x: ball.screenLeft, y: ball.screenTop },
                    tR: { x: ball.screenLeft + 100, y: ball.screenTop },
                    bL: { x: ball.screenLeft, y: ball.screenTop + 100 },
                    bR: { x: ball.screenTop + 100, y: ball.screenLeft + 100 },
                };

                // Touching
                // if (thisEdges.tL.x >= edges.tL.x && thisEdges.tL.x <= edges.tR.x) {
                //     console.log("touched");
                // }
            }
        });

        // allWindows.forEach((elem, ind) => {
        // 	if (ind != thisBallNumber) {
        // 		[elem.screenLeft, elem.screenLeft + 100].forEach((left) => {
        // 			if (left >= ball.screenLeft || left <= ball.screenLeft + 100) {
        // 				console.log("HENLO");
        // 				cLMultiplier = cLMultiplier * -1;
        // 			}
        // 		});

        // 		[elem.screenTop, elem.screenTop + 1].forEach((right) => {
        // 			if (right >= ball.screenTop || right <= ball.screenTop + 100) {
        // 				cTMultiplier = cTMultiplier * -1;
        // 			}
        // 		});
        // 	}
        // });
        [cL, cT] = [cL + cLMultiplier, cT + cTMultiplier];
        // ball.moveTo(cL + startX, 0);
        // ball.moveTo(0, cT + startY);
        ball.moveTo(cL + startX, cT + startY);
    }, 2);
});
