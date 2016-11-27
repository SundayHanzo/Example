#pragma strict

var speed:float = 2.0;

var right:boolean = false;
var left:boolean = false;
var up:boolean = false;
var down:boolean = false;

var animator:Animator;

var enemy:Rigidbody2D;

var orb:Rigidbody2D;
var orbspeed:float = 20f;
var orbspeed2:float = -20f;

function Update () {
	var orbInstance:Rigidbody2D;

	if(Input.GetButtonDown("Fire1"))
	{
		orbInstance = Instantiate(orb, transform.position, Quaternion.Euler(new Vector3(-1, 0, 0)));
			if (right==true)
			{
				orbInstance.velocity = new Vector2(orbspeed, 0);
			}
			if (left==true)
			{
				orbInstance.velocity = new Vector2(orbspeed2, 0);
			}
			if (up==true)
			{
				orbInstance.velocity = new Vector2(0, orbspeed);
			}
			if (down==true)
			{
				orbInstance.velocity = new Vector2(0, orbspeed2);
			}
	}
}

function enemyspawn()
{
	var enemyInstance = Instantiate(enemy, Vector3(Random.Range(2, 8), Random.Range(-4, 4), 0), Quaternion.Euler(new Vector3(0,0,0)));
}

function Start () {
	animator = GetComponent("Animator");
	enemyspawn();
}

function FixedUpdate () {
	MoveCharacter();
}

function MoveCharacter()
{
	if (Input.GetKey(KeyCode.D))
	{
		animator.SetBool("left", false);
		animator.SetBool("right", true);
		animator.SetBool("down", false);
		animator.SetBool("up", false);
		left = false;
		right = true;
		down = false;
		up = false;
		transform.Translate(Vector3.right * speed * Time.deltaTime);
	}
	if (Input.GetKey(KeyCode.W))
	{
		animator.SetBool("left", false);
		animator.SetBool("right", false);
		animator.SetBool("down", false);
		animator.SetBool("up", true);
		left = false;
		right = false;
		down = false;
		up = true;
		transform.Translate(Vector3.up * speed * Time.deltaTime);
	}
	if (Input.GetKey(KeyCode.S))
	{
		animator.SetBool("left", false);
		animator.SetBool("right", false);
		animator.SetBool("down", true);
		animator.SetBool("up", false);
		left = false;
		right = false;
		down = true;
		up = false;
		transform.Translate(Vector3.down * speed * Time.deltaTime);
	}
	if (Input.GetKey(KeyCode.A))
	{
		animator.SetBool("left", true);
		animator.SetBool("right", false);
		animator.SetBool("down", false);
		animator.SetBool("up", false);
		left = true;
		right = false;
		down = false;
		up = false;
		transform.Translate(Vector3.left * speed * Time.deltaTime);
	}
	if(right == true)
	{
		transform.Translate(Vector3.right * speed * Time.deltaTime);
	}
	if(left == true)
	{
		transform.Translate(Vector3.left * speed * Time.deltaTime);
	}
	if(down == true)
	{
		transform.Translate(Vector3.down * speed * Time.deltaTime);
	}
	if(up == true)
	{
		transform.Translate(Vector3.up * speed * Time.deltaTime);
	}
}
InvokeRepeating("enemyspawn", 3, 3);