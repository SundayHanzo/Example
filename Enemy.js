#pragma strict

var heroObj:GameObject;

var enemyRight:boolean = false;
var enemyLeft: boolean = false;
var enemyUp : boolean = false;
var enemyDown: boolean = false;
var enemyspeed:float;
var enemyAnimator: Animator;

InvokeRepeating("Accelerate", 2, 5);

function Start () {
	enemyspeed= 1.0;
}

function Update () {
	enemymove();
}

function enemymove()
{
	//heroObj = GameObject.Find("Hero");
	enemyAnimator = GetComponent("Animator");
	if (heroObj != null)
	{
		if (transform.position.y>heroObj.transform.position.y)
		{
			enemyAnimator.SetBool("enemyLeft", false);
			enemyAnimator.SetBool("enemyRight", false);
			enemyAnimator.SetBool("enemyDown", true);
			enemyAnimator.SetBool("enemyUp", false);
			enemyLeft = false;
			enemyRight = false;
			enemyDown = true;
			enemyUp = false;
			transform.Translate(Vector3.down * enemyspeed * Time.deltaTime);
		}
		else
		{
			enemyAnimator.SetBool("enemyLeft", false);
			enemyAnimator.SetBool("enemyRight", false);
			enemyAnimator.SetBool("enemyDown", false);
			enemyAnimator.SetBool("enemyUp", true);
			enemyLeft = false;
			enemyRight = false;
			enemyDown = false;
			enemyUp = true;
			transform.Translate(Vector3.up * enemyspeed * Time.deltaTime);
		}
		if (transform.position.x>heroObj.transform.position.x)
		{
			enemyAnimator.SetBool("enemyLeft", true);
			enemyAnimator.SetBool("enemyRight", false);
			enemyAnimator.SetBool("enemyDown", false);
			enemyAnimator.SetBool("enemyUp", false);
			enemyLeft = true;
			enemyRight = false;
			enemyDown = false;
			enemyUp = false;
			transform.Translate(Vector3.left * enemyspeed * Time.deltaTime);
		}
		else
		{
			enemyAnimator.SetBool("enemyLeft", false);
			enemyAnimator.SetBool("enemyRight", true);
			enemyAnimator.SetBool("enemyDown", false);
			enemyAnimator.SetBool("enemyUp", false);
			enemyLeft = false;
			enemyRight = true;
			enemyDown = false;
			enemyUp = false;
			transform.Translate(Vector3.right * enemyspeed * Time.deltaTime);
		}
	}
}

function Accelerate()
{
	enemyspeed = enemyspeed + 1;
}