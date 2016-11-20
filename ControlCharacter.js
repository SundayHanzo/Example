#pragma strict

var speed:float = 3.0;
var sound1 : AudioClip;
var sound2 : AudioClip;

function Start () {
print("Game Start!!!");
}

function Update () {
	MoveCharacter();
}

function MoveCharacter(){
	if(Input.GetKey(KeyCode.A)){
		transform.Translate(Vector3.left*speed*Time.deltaTime);
	}
	if(Input.GetKey(KeyCode.W)){
		transform.Translate(Vector3.up*speed*Time.deltaTime);
	}
	if(Input.GetKey(KeyCode.S)){
		transform.Translate(Vector3.down*speed*Time.deltaTime);
	}
	if(Input.GetKey(KeyCode.D)){
		transform.Translate(Vector3.right*speed*Time.deltaTime);
	}
	transform.position.x = Mathf.Clamp(transform.position.x, -5, 5);
	transform.position.y = Mathf.Clamp(transform.position.y, -5, 5);
}