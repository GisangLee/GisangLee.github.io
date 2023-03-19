<script>
	import ccp from '$lib/images/aws-certified-cloud-practitioner.png';
	import dva from '$lib/images/aws-certified-developer-associate.png';
</script>


<svelte:head>
	<title>자격증</title>
	<meta name="description" content="자격증" />
</svelte:head>


<div class="root_container">
	<div>
		<p style="text-align: center;">
			취득일자
			<span>2022.12</span>
		</p>
		<span>
			<picture>
				<source srcset={ccp} type="image/png" />
				<img src={ccp} alt="Welcome" width="200" height="200"/>
			</picture>
		</span>
		<p style="text-align: center;">
			만료일
			<span>2025.12</span>
		</p>
	</div>
	<div>
		<p style="text-align: center;">
			취득일자
			<span>2023.02</span>
		</p>
		<span>
			<picture>
				<source srcset={dva} type="image/png" />
				<img src={dva} alt="Welcome" width="200" height="200"/>
			</picture>
		</span>		
		<p style="text-align: center;">
			만료일
			<span>2026.02</span>
		</p>
	</div>

</div>
<style>
	.root_container {
        display: flex;
		margin-top: 5rem;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 100%;
    }
</style>