import { fabric } from 'fabric';
import { Canvas } from 'fabric/fabric-impl';

export class Ecg {
    canvas: fabric.Canvas;
    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.drawEcgCanvas(canvas);
        this.drawLead(canvas);
    }
    //绘制画布
    drawEcgCanvas(canvas: Canvas) {
        //绘制背景
        for (let i = 0; i < canvas.width!; i += 10) {
            canvas.add(new fabric.Line([i, 0, i, canvas.height!], { stroke: 'black', selectable: false }));
        }
        //横向
        for (let i = 0; i < canvas.height!; i += 10) {
            canvas.add(new fabric.Line([0, i, canvas.width!, i], { stroke: 'black', selectable: false }));
        }
    }
    //绘制导联
    drawLead(canvas: Canvas) {
        //基准线
        const start = canvas.height! / 2;
        console.log(start);

        //以start为基准线 正负100 随机生成导联随机数
        let leadList1: number[] = [];
        for (let i = 0; i < 5000; i++) {
            const lead = Math.floor(Math.random() * 200 - 100);
            leadList1.push(lead);
        }
        //以start为基准线 正负200 随机生成导联随机数
        let leadList2: number[] = [];
        for (let i = 0; i < 5000; i++) {
            const lead = Math.floor(Math.random() * 400 - 200);
            leadList2.push(lead);
        }

        //绘制导联 
        let x1 = 0;
        const interval = setInterval(() => {
            x1 -= 1;
            canvas.clear();
            this.drawEcgCanvas(canvas);
            for (let i = 0; i < leadList1.length; i++) {
                const lead = leadList1[i];
                const leadLine = new fabric.Line([x1 + i * 10, start + lead, x1 + (i + 1) * 10, start + leadList1[i + 1]], {
                    stroke: 'red',
                    selectable: false,
                });
                canvas.add(leadLine);
            }
            canvas.renderAll();
            if (x1 <= -(leadList1.length - 1) * 10) {
                x1 = 0;
                clearInterval(interval);
            }
        }, 30);



        //绘制导联
        // let x2 = 0;
        // const interval2 = setInterval(() => {
        //     x2 -= 1;
        //     canvas.clear();
        //     this.drawEcgCanvas(canvas);
        //     for (let i = 0; i < leadList2.length; i++) {
        //         const lead = leadList2[i];
        //         const leadLine = new fabric.Line([x2 + i * 10, start + lead, x2 + (i + 1) * 10, start + leadList2[i + 1]], {
        //             stroke: 'red',
        //             selectable: false,
        //         });
        //         canvas.add(leadLine);


        //         leadLine.on('mouseover', (e: fabric.IEvent) => {
        //             //todo
        //         });

        //         leadLine.on('mouseout', (e: fabric.IEvent) => {
        //             //todo
        //         });


        //         leadLine.on('mousedown', (e: fabric.IEvent) => {
        //             //todo
        //             if (e.button == 1 && e.target) {
        //                 console.log(e.target);
        //             }
        //         })
        //     }
        //     canvas.renderAll();
        //     if (x2 <= -(leadList2.length - 1) * 10) {
        //         x2 = 0;
        //         clearInterval(interval2);
        //     }
        // }, 30);
    }

    //暂停心电图
    pauseEcg() {
        //todo
    }
}