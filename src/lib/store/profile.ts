import type { User } from "$lib/models/user";
import { writable } from "svelte/store";

export const profile = writable<User | null>(null);