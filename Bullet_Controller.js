#pragma strict

function Start () {

}

function Update () {
	if(transform.position.y>4){
		Destroy(gameObject);
	}
}