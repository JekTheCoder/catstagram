import type { Comment } from './comment';

export interface Post {
	username:    string;
	location:    string;
	avatar:      string;
	photo:       string;
	like:        boolean;
	bookmark:    boolean;
	postComment: string;
	comments:    Comment[];
}