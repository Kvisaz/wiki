# HTML Image Element from any Phaser objects

## 1. Render in texture

Any Phaser gameObject - image, sprite, container - can be rendered in RenderTexture

```typescript
const scene: Phaser.Scene = ...; // current scene
const mySprite: Phaser.GameObjects.Sprite = ...; // sample sprite
const textureWidth = 100;
const textureHeight = 100;

const rt = scene.make.renderTexture({
      x: 0,
      y: 0,
      width: textureWidth,
      height: textureHeight,
    });

// render to texture! 
renderTexture.draw(mySprite, 0, 0);
```

## 2. Get Image Element from RenderTexture

Just use this function as `getImage(myRenderTextur).then(imageElement => )`

Минусы асинхронного метода - сильная задержка.
Можно использовать синхронный вариант, убрать Promise и возвращать сразу image, но использовать его с коллбэком на onload. Это будет чуть быстрее, чем делать все через await-async.

```typescript
function getImage(rt: Phaser.GameObjects.RenderTexture, type = 'image/png'): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
      //@ts-ignore - gameCanvas exists only in CanvasRenderer
      const isCanvas = rt.renderer.gameCanvas != null;;
      const image = new Image();
      image.onload = () => resolve(image);
      if (isCanvas) {
        image.src = rt.canvas.toDataURL(type);
      } else {
        rt.snapshot((a) => {
          image.src = (a as HTMLImageElement).src;
        }, type);
      }
    });
  }
```

[<------------ Phaser Wiki ](../README.md)