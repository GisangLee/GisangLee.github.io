<svelte:head>
	<title>경력</title>
	<meta name="description" content="경력" />
</svelte:head>
<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
</script>

<Timeline position="alternate">
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>2021.12 입사</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 150px;'}>
			<h3 style={'margin-top: -2px;'}>모블디</h3>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>~ 2022.05</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 250px;'}>
			<h3 style={'margin-top: -2px;'}>패션 도메인 SNS 앱 서비스 API 개발</h3>
			<p style={'margin-top: -2px;'}>Selenum + BS4 + subprocess & PyQt5를 활용하여 로컬 이미지 크롤러 exe 개발</p>
			<p style={'margin-top: -2px;'}>단일 EC2 서버 세팅</p>
			<p style={'margin-top: -2px;'}>NGINX + Gunicorn 배포</p>
			<p style={'margin-top: -2px;'}>Django FullStack 어드민 페이지 개발</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>~ 2022.08</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 100px;'}>
			<h3 style={'margin-top: -2px;'}>사내 인트라 근태관리 웹 서비스 개발</h3>
			<p style={'margin-top: -2px;'}>Django FullStack</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>2022.08.31 모블디</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 150px;'}>
			<h3 style={'margin-top: -2px;'}>퇴사</h3>
			<p style={'margin-top: -2px;'}>사내 문화 Issue & 다양한 Django 경험을 위한 선택</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>2022.09.13 입사</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 100px;'}>
			<h3 style={'margin-top: -2px;'}>똑똑한 개발자</h3>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>~ 2023.02</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 450px;'}>
			<h3 style={'margin-top: -2px;'}>패스트파이브 커머스 앱 (OOM) API 개발</h3>
			<p style={'margin-top: -2px;'}>celery를 활용하여 Background task 및 Scheduler 관리</p>
			<p style={'margin-top: -2px;'}>포인트 기능 자체 구축</p>
			<p style={'margin-top: -2px;'}>Aurora RDS Read replica를 활용하여 read latency 감소</p>
			<p style={'margin-top: -2px;'}>ASG + ALB를 활용하여 트래픽 분산</p>
			<p style={'margin-top: -2px;'}>S3 Presigned Url 방식의 이미지 업로드</p>
			<p style={'margin-top: -2px;'}>Lambda를 S3 이벤트 트리거로 활용 > 이미지 용량 감소</p>
			<p style={'margin-top: -2px;'}>Django Admin을 커스텀하여 마스터 및 입점사 관리</p>
			<p style={'margin-top: -2px;'}>AWS ECS를 활용하여 celery, backend 등 Dockerizing</p>
			<p style={'margin-top: -2px;'}>Github actions로 CICD 환경에서 개발 경험 상승</p>
			<p style={'margin-top: -2px;'}>IaC ( Cloudformation Template )으로 배포 구성 관리</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>2023.03</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height:50px;'}>
			<h3 style={'margin-top: -2px;'}>OOM 서비스 종료</h3>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>~ 2023.04</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 200px;'}>
			<h3 style={'margin-top: -2px;'}>위아트 OpenAI 웹 서비스 API 개발</h3>
			<p style={'margin-top: -2px;'}>DALL-E 모델 API를 활용한 이미지 생성 및 관리</p>
			<p style={'margin-top: -2px;'}>AWS 퍼블릭 서브넷 > Private Subned으로 관리</p>
			<p style={'margin-top: -2px;'}>이미지 생성에 필요한 토큰 결제</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>~ 2023.06</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #FEC048;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 300px;'}>
			<h3 style={'margin-top: -2px;'}>소명 국민재난 안전 교육 앱 서비스 API 개발</h3>
			<p style={'margin-top: -2px;'}>특정 활동을 통한 경험치 획득 및 레벨업등 게임적 요소 기능</p>
			<p style={'margin-top: -2px;'}>Generic Viewset으로 Refactoring</p>
			<p style={'margin-top: -2px;'}>TDD 도입</p>
		</TimelineContent>
	</TimelineItem>

</Timeline>

<style>
	p {
		margin: px 0;
		color: grey;
	}
</style>