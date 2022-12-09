<script>
	import '$lib/styles/profile-label.css';
</script>

<div class="stories">
	<header>
		<h2>Stories</h2>
		<span>View all</span>
	</header>
	<ul>
		<li class="label">
			<div class="avatar">
				<img src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9" alt="">
			</div>
			<div class="info">
				<h2 class="primary">
					A second cat
				</h2>
				<span class="secondary">Since 4 hours ago</span>
			</div>
		</li>
	</ul>
</div>

<style>
	ul {
		list-style: none;
	}

	header {
		display: flex;
		justify-content: space-between;
		margin-bottom: .3rem;
	}

	.stories {
		display: inline-block;
	}
</style>