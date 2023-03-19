<script>
	import profile from '$lib/images/profile_1.jpeg';
</script>

<svelte:head>
	<title>자기소개</title>
	<meta name="description" content="자기 소개" />
</svelte:head>

<div class="root_container">
	<div class="profile">
		<span>
			<picture>
				<source srcset={profile} type="image/jpeg" />
				<img src={profile} alt="Welcome" width="200" height="200"/>
			</picture>
		</span>
	</div>
	<div class="text-column">
		<h1>자기 소개</h1>
		<span>
			반갑습니다. 저는 파이썬 기반의 백엔드 개발자 이기상입니다.
			<div style="height: 5px;"></div>
			저는 주로 <strong>django + DRF를 활용한 REST API </strong>개발을 해왔습니다.
			<div style="height: 5px;"></div>
			현재는 업무 이후 평일과 주말을 활용해서 머신러닝에 대한 개인 공부를 진행하고 있으며,
			<div style="height: 5px;"></div>
			Fastapi 프레임워크에 대한 공부나 플러터 스벨트 등 <strong>관심있는 다양한 기술</strong>에 대한 공부도 틈틈히 하고있습니다.
		</span>
		<div style="height: 5px;"></div>
	</div>
	<div style="height: 40px;"></div>
	<div class="text-column">
		<h1>성장 및 학업 과정</h1>
		<span>
			중학교 1학년이 되던 해, 미국으로 건너가 Junior HighSchool 생활을 했습니다.
			<div style="height: 5px;"></div>
			그곳에서 다양한 인종의 사람들을 만나고 대화하며
			<div style="height: 5px;"></div>
			다양한 문화권의 사람들을 통해 문화를 습득하고 사회를 빠르게 배웠습니다.
			<div style="height: 5px;"></div>
			유학을 마치고 고등 교과 과정을 한국에서 마치고 다시 미국으로 건너가
			<div style="height: 5px;"></div>
			MI 음악 대학 Bachelor degree 과정을 밝게 되었습니다.
			<div style="height: 5px;"></div>
			<br>
			하지만 개인 사정으로 유학을 진행할 수 없는 상황이 되었고,
			<div style="height: 5px;"></div>
			음악의 꿈을 접어 한국으로 돌아와 다른 길을 찾아서 공부를 해야만 헀습니다.
			<div style="height: 5px;"></div>
			군대를 다녀오자마자, 지인의 권유로 프로그래밍을 시작하게 되었고
			<div style="height: 5px;"></div>
			<br>
			C 언어를 기점으로 파이썬을 공부했습니다.
			<div style="height: 5px;"></div>
			하지만 그 당시, 저의 학력은 고졸이었고, 저에게는 학업이 더 필요했기 때문에
			<div style="height: 5px;"></div>
			동국대학교에서 진행하는 산하기관인 DUICA를 통해 학점은행제로 컴퓨터 공학 학사를 취득했습니다.
		</span>
	</div>
	<div style="height: 40px;"></div>
	<div class="text-column">
		<h1>교육 과정</h1>
		<span>
			동국대학교 DUICA - 2020.03 ~ 2022.02 <strong>컴퓨터 공학 학사 졸업</strong>
			<div style="height: 5px;"></div>
		</span>
	</div>
</div>



<style>
	strong {
		color: rgb(207, 67, 16);
	}

	.root_container {
		display: flex;
		max-width: 48rem;
		flex: 0.6;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
    }
	.profile {
		display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-image: url(${profile});
        background-size: cover;
        background-repeat: no-repeat;
		border-radius: 100%;
    	overflow: hidden;
    }

	img {
		object-fit: cover;
	}

</style>