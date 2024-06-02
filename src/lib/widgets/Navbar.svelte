<script>
	import UserMenu from './UserMenu.svelte';
	import {
		DarkMode,
		Dropdown,
		DropdownItem,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
		Search
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import '../../app.pcss';
	import Users from '../data/users.json';

	export let fluid = true;
	export let drawerHidden = false;
	export let list = false;
</script>

<Navbar {fluid} class="text-black" color="default" let:NavContainer>
	<NavContainer class="mb-px mt-px px-1" {fluid}>
		<NavHamburger
			onClick={() => (drawerHidden = !drawerHidden)}
			class="m-0 me-3 md:block lg:hidden"
		/>
		<NavBrand href="/" class={list ? 'w-40' : 'lg:w-60'}>
			<!-- <img
				src="https://www.rrbull.com/image/RRBULL.jpg"
				class="me-2.5 h-6 sm:h-8"
				alt="Flowbite Logo"
			/> -->
			<span
				class="ml-px self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl"
			>
				RRBULL
			</span>
		</NavBrand>
		<div class="hidden lg:block lg:ps-3">
		</div>
		<div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
			<!-- <Notifications />
			<AppsMenu /> -->
			<DarkMode />
			<UserMenu {...Users[4]} />
		</div>
	</NavContainer>
</Navbar>
