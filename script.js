const app = new PIXI.Application({width:800,height:600});
document.body.appendChild(app.view);

Promise.all([PIXI.Texture.fromURL("tile-a.png"),PIXI.Texture.fromURL("tile-b.png")]).then(([texA,texB])=>{
	app.stage.addChild(new PIXI.TilingSprite(texA,200,128))
		.position.set(10,10);

	app.stage.addChild(new PIXI.TilingSprite(texB,200,128))
		.position.set(10,148);	
})
.catch(console.error);