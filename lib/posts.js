import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";

export async function getPosts() {
  const blogPostsRef = collection(db, 'blogPosts');
  const q = query(blogPostsRef, orderBy('timestamp', 'desc'));
  const querySnap = await getDocs(q);

  const blogPosts = [];
  querySnap.docs.map(doc => {
    const date = doc.data().timestamp.toDate();
    const mm = date.getMonth();
    const dd = date.getDate();
    let yyyy = date.getFullYear();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const fullDate = `${months[mm]} ${dd}, ${yyyy}`;

    const updatedPost = {
      ...doc.data(),
      timestamp: fullDate
    };
    blogPosts.push(updatedPost);
  });

  return blogPosts;
};