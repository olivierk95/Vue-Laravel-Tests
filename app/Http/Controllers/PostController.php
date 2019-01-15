<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PostCollection;
use App\Post;

class PostController extends Controller
{
   //Function that stores the data inside the MySQL database.
   public function store(Request $request) {
      $post = new Post([
         'title' => $request->get('title'),
         'body' => $request->get('body')
      ]);
      $post->save();
      return response()->json('success');
   }

   //Function that return all the post inside the MySQL database.
   public function index() {
      return new PostCollection(Post::all());
   }

   //Function that return a specific post inside the MySQL database in order to edit it.
   public function edit($id) {
      $post = Post::find($id);
      return response()->json($post); 
   }

   //Function that update a specific post inside the MySQL database.
   public function update($id, Request $request) {
      $post = Post::find($id);
      $post->update($request->all());
      
      return response()->json('successfully updated'); 
   }

   //Function that delete a specific post inside the MySQL database.
   public function delete($id) {
      $post = Post::find($id);
      $post->delete();

      return response()->json('successfully deleted');
   }


}
