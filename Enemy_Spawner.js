#pragma strict
private var speedX : float;
private var speedY : float;

function Start () {
	SetEnemy();
}

function Update () {
	var moveX = speedX*Time.deltaTime;
	var moveY = speedY*Time.deltaTime;

transform.Translate(Vector3(-moveX, moveY, 0), Space.World);
	if(transform.position.x<-5 || transform.position.x<5){
		SetEnemy();
	}	if(transform.position.y<-5){
		SerEnemy();
	}
}

function SerEnemy(){
	speedX=Random.Range(-10f, 10f);
	speedY=Random.Range(20, 30f);
	var posX=Random.Range(-5f, 5f);
	var posY=Random.Range(3f, 5f);
	transform.position=Vector2(posX, posY);
}