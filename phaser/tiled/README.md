# Tiled карты

В Phaser можно быстро подключать карты уровней, созданные в [Tiled](https://www.mapeditor.org/)

## Подключить камеру и клавиши курсора

Этот хак позволяет скроллить уровень клавишами курсора, нужно вызвать функцию в create после создания карты.

```typescript
/**  подключить камеру к карте и управлетяь курсорами **/
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