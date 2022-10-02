import Sketch from "react-p5";
export default (props) => {

    function setup(p5, canvasParentRef) {
        p5.createCanvas(500, 500).parent(canvasParentRef);
        // Put setup code here
    }

    let angel = 0;
    function draw(p5) {
        // Put drawings here
        // fill(234, 31, 81);
        // noStroke();
        // rect(50, 50, 250, 250);
        // fill(255);
        // textStyle(BOLD);
        // textSize(140);
        // text(foo, 60, 250);

        p5.background(175);
        p5.ellipse(x, y, 70, 70);

        p5.rectMode(p5.CENTER);
        p5.noStroke();
        p5.fill(0, 0, 255);
        // rotateZ(angel);
        p5.rect(0, 0, 150, 150);
        angel += -0.07;
    }

    return <Sketch setup={setup} draw={draw} />
}