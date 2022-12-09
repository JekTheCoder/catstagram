<script lang="ts">
	import type { User } from '$lib/models/user';
	import '$lib/styles/profile-label.css';
	export let profile: User;
</script>

<div class="label">
	<div class="avatar">
		<img
			src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"
			alt=""
		/>
	</div>
	<div class="info">
		<h2 class="primary">{profile.nickname}</h2>
		<span class="secondary">{profile.name}</span>
	</div>
</div>