import type { Post } from "./post";
import type { User } from "./user";

export interface AppData {
	user:  User;
	posts: Post[];
}