export default class SmokeGL {
    constructor($dom)
    {
        this._$dom = $dom;
        this._dWidth = this._$dom.width();
        this._dHeight = this._$dom.height();

        this._init();
    }

    _init()
    {
        // Clock
        this._clock = new THREE.Clock();

        // Renderer
        this._renderer = new THREE.WebGLRenderer();
        this._renderer.setSize(this._dWidth, this._dHeight);

        // Scene
        this._scene = new THREE.Scene();

        // Camera
        this._camera = new THREE.PerspectiveCamera(75, this._dWidth/this._dHeight, 1, 10000);
        this._camera.position.z = 1000;
        this._scene.add( this._camera );

        // Light
        this._light = new THREE.DirectionalLight(0xffffff, .7);
        this._light.position.set(-1,0,1);
        this._scene.add(this._light);

        // Smoke geometry
        this._smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
        this._smokeMaterial = new THREE.MeshLambertMaterial({color: 0xffba8e, map: this._smokeTexture, transparent: true});
        this._smokeGeometry = new THREE.PlaneGeometry(300,300);
        this._smokeParticles = [];

        for (var i = 0; i < 50; i++) {
            let particle = new THREE.Mesh(this._smokeGeometry, this._smokeMaterial);
            particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
            particle.rotation.z = Math.random() * 360;
            this._scene.add(particle);
            this._smokeParticles.push(particle);
        }

        this._$dom[0].appendChild(this._renderer.domElement);
    }

    // Redraw
	//-----------------------------------------------------o

    update()
    {
        // Evolve smoke
        var delta = this._clock.getDelta();
        var sp = this._smokeParticles.length;

        while (sp--) {
            this._smokeParticles[sp].rotation.z += (delta * 0.2);
        }

        // Rerender
        this._renderer.render(this._scene, this._camera);
    }

    resize()
    {
        this._dWidth = this._$dom.width();
        this._dHeight = this._$dom.height();

        // TODO: Destroy and re init
        
        // this._renderer.setSize(this._dWidth, this._dHeight);
        //
        // this._camera.aspect = this._dWidth/this._dHeight;
    }
}
