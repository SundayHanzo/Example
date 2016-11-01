#pragma strict

var Bullet = GetComponent.<Rigidbody2D>();

var speed:float = 20;

function Start () {

}

function Update () {
var BulletInstance = GetComponent.<Rigidbody2D>();

if(Input.GetButtonDown("fire1"))
{
BulletInstance = Instantiate(Bullet, transform.position, Quaternion.Euler(new Vector3(0,0,0)));
BulletInstance.velocity = new Vector2(speed, 0);
BulletInstance.name = "Bullet";
}
}