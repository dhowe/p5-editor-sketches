
let p = window;

    let x = 10, y = 120, s, showBB = 0, h = 54.5;

      p.setup = function () {
        p.createCanvas(900, 400);
        p.background(255);
        p.textSize(30);
        p.textLeading(30);
        p.stroke(0) && p.strokeWeight(1) && p.line(0, y, p.width, y); //h-line

        //1
        s = 'LEFT TOP\nalignment\nis easy.';
        p.fill(0) && p.noStroke() && p.textAlign(p.LEFT, p.TOP) && p.text(s, x, y);
        //p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
        if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
        p.stroke(0) && p.strokeWeight(1) && p.line(x, 0, x, p.height); // v-line

        //2
        x += 165, s = 'LEFT BASELINE\nalignment\nis easy.';
        p.fill(0) && p.noStroke() && p.textAlign(p.LEFT, p.BASELINE) && p.text(s, x, y);
        //p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
        if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
        p.stroke(0) && p.strokeWeight(1) && p.line(x, 0, x, p.height); // v-line

        //3 
        x += 250, s = 'LEFT CENTER\nalignment\nis easy.';
        p.fill(0) && p.noStroke() && p.textAlign(p.LEFT, p.CENTER) && p.text(s, x, y);
        if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
        p.stroke(0) && p.strokeWeight(1) && p.line(x, 0, x, p.height); // v-line

        //4
        x += 225, s = 'LEFT BOTTOM\nalignment\nis easy.';
        p.fill(0) && p.noStroke() && p.textAlign(p.LEFT, p.BOTTOM) && p.text(s, x, y);
        //p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
        if (showBB) p.noFill() && p.stroke(0) && p.rect(...Object.values(p.textBounds(s, x, y)));
        p.stroke(0) && p.strokeWeight(1) && p.line(x, 0, x, p.height); // v-line
        
        p.saveCanvas('boundingBoxBreaksLeft.p5.jpg')
      }