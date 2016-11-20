#pragma strict

var bullet : Rigidbody2D;
var speed : float;

function Start () {

}

function Update () {
	var myTan:Rigidbody2D;
	if(Input.GetButtonDown("Fire1")){
		myTan = Instantiate(bullet, transform.position, Quaternion.Euler(new Vector3(0,0,0)));
		myTan.velocity = new Vector2(0, speed);
		myTan.name = "Bullet";
	}
}