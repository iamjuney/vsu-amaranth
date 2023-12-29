<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
</script>

<div class="relative mt-8 bg-[#f1f3f2]">
	<div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-6xl lg:px-8">
		<div class="py-10 sm:py-12 lg:flex lg:items-start lg:py-16">
			<div class="lg:w-0 lg:flex-1">
				<h2 class="text-3xl font-extrabold tracking-tight text-foreground">
					Be part of our awesome online community!
				</h2>
				<p class="mt-4 text-lg text-foreground">
					The latest news, articles, and resources, sent to your inbox weekly.
				</p>
			</div>
			<div class="lg:mt-8lg: mt-12 sm:w-full lg:ml-8 lg:flex-1">
				<form class="flex">
					<label for="email_address" class="sr-only">Email address</label>
					<Input
						name="email_address"
						id="email_address"
						class="mr-4 h-11 border-foreground"
						placeholder="Enter your email"
					/>
					<Button size="lg">Notify Me</Button>
				</form>
				<p class="mt-3 text-sm">
					We care about the protection of your data. Read our
					<!-- space -->
					<a href="/" class="font-medium text-foreground underline"> Privacy Policy. </a>
				</p>
			</div>
		</div>
	</div>
</div>
