# Tiled карты

В Phaser можно быстро подключать карты уровней, созданные в [Tiled](https://www.mapeditor.org/)

Статьи на английском
- [Nodular Game Worlds](https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6)
- [Phaser 3 and Tiled](https://stackabuse.com/phaser-3-and-tiled-building-a-platformer/)

Все советы ниже используют Phaser 3 + TypeScript.

## Todo - как подготовить карту в Tiled

Карта в Tiled состоит из самой карты и тайлсетов, они настраиваются отдельно.

Обязательные настройки Tiled карты для Phaser
- Orthogonal
- Base64 (uncompressed)

Создав карту, надо создать в ней тайлсеты. Обязательные настройки 
- Embed in map




Обязательно tileset должны быть "включены" в карту tiled. 

## Подключить камеру и клавиши курсора

Этот хак позволяет скроллить уровень клавишами курсора, нужно вызвать функцию в create после создания карты.

```typescript
/**  подключить камеру к карте и управлять курсорами **/
    function addCameraControls(scene: Phaser.Scene, tileMap: Phaser.Tilemaps.Tilemap):Phaser.Cameras.Controls.FixedKeyControl {
        const camera = scene.cameras.main;
        // Set up the arrows to control the camera
        const cursors = scene.input.keyboard.createCursorKeys();
        const controls = new Phaser.Cameras.Controls.FixedKeyControl({
            camera: camera,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        });

        // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
        camera.setBounds(0, 0, tileMap.widthInPixels, tileMap.heightInPixels);

        /// вот это обязательно - чтобы клавиши работали    
        scene.events.on('update', (time, delta)=> {
            controls.update(delta);
        });

        /// это уже не обязательно
        return controls;
    }
```