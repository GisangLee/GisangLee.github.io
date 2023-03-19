<script>
	import ccp from '$lib/images/aws-certified-cloud-practitioner.png';
	import dva from '$lib/images/aws-certified-developer-associate.png';
</script>


<svelte:head>
	<title>기술스택</title>
	<meta name="description" content="기술스택" />
</svelte:head>


<div class="text-column">
	<h1>업무에 사용했거나 사용 중인 Skill입니다.</h1>
	<div class="tech_container">
		<span class="tech_title">
			<strong>Language</strong>
		</span>
		<div class="tech_box">
			<ul>
				<li>
					Python
				</li>
				<br>
				<li>
					JavaScript
				</li>
			</ul>
		</div>
	</div>
	<div class="tech_container">
		<span class="tech_title">
			<strong>Backend</strong>
		</span>
		<div class="tech_box">
			<ul>
				<li>
					Django
				</li>
				<br>
				<li>
					Django Rest Framework
				</li>
			</ul>
		</div>
	</div>
	<div class="tech_container">
		<span class="tech_title">
			<strong>Database</strong>
		</span>
		<div class="tech_box">
			<ul>
				<li>
					Postgresql
				</li>
				<br>
				<li>
					Maria DB
				</li>
				<br>
				<li>
					Mysql
				</li>
			</ul>
		</div>
	</div>
	<div class="tech_container">
		<span class="tech_title">
			<strong>Server</strong>
		</span>
		<div class="tech_box">
			<ul>
				<li>
					AWS EC2, Nginx, Ubuntu
				</li>
				<br>
				<li>
					AWS Nat Gateway, ALB, ASG
				</li>
				<br>
				<li>
					AWS SES, AWS Lambda, AWS CloudWatch
				</li>
				<br>
				<li>
					AWS SNS, AWS ECR, AWS ECS, Github actionesql
				</li>
			</ul>
		</div>
	</div>
	<div class="tech_container">
		<span class="tech_title">
			<strong>Async Background Tasks</strong>
		</span>
		<div class="tech_box">
			<ul>
				<li>
					Celery for background tasks
				</li>
				<br>
				<li>
					Redis as Message Broker
				</li>
				<br>
				<li>
					Celery Beat as Scheduler
				</li>
			</ul>
		</div>
	</div>
	<div class="tech_container">
		<span class="tech_title">
			<strong>Frontend</strong>
		</span>
		<div class="tech_box">
			<ul>
				<li>
					HTML
				</li>
			</ul>
		</div>
	</div>
	<div class="tech_container">
		<span class="tech_title">
			<strong>Cooperation Tool</strong>
		</span>
		<div class="tech_box">
			<ul>
				<li>
					Jira
				</li>
				<br>
				<li>
					Slack
				</li>
				<br>
				<li>
					Github
				</li>
				<br>
				<li>
					Notion
				</li>
			</ul>
		</div>
	</div>

</div>

<style>
    .tech_container {
		margin-top: 3rem;
		display: flex;
		flex-direction: row;
    }
	.tech_title{
		font-size: large;
	}
</style>