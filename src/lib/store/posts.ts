import type { Post } from '$lib/models/post';
import { writable } from "svelte/store";

export const posts = writable<Post[]>([]);