<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use App\Models\PostLike;
use App\Models\Followers;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $users = User::all();
        return response()->json($users);
    }


    public function getPosts(Request $request){
        $posts = Auth::user()->getPosts();
        
        $data = [];
        $user;
        $likes;

        
        foreach ($posts as $key => $value) {
            //User array to user obj
            //$user = (object) $value->user();
            $likes = PostLike::likePost($value->idPost);
            
            array_push($data, [
                'post' => [
                    'component' => $value, 
                    'likes' => $likes,
                    'user' => auth()->user(),
                ],
            ]);
        }
        return response()->json([
            'data' => $data,
            'status' => 1,
        ]);
        
    }

    public function getUser(Request $request){
        $usu = $request->idUsu;
        $data = User::findOrFail($usu);

        $followers = Followers::getFollower($usu);
        //Pass the [{},{}] to [x,x]
        $followersArr = [];
        foreach ($followers as $key => $value) {
            array_push($followersArr, $value->follower);
        }

        $followings = Followers::getFollowing($usu);
        $followingssArr = [];
        foreach ($followings as $key => $value) {
            array_push($followingssArr, $value->following);
        }

        $follows=[
            'followers'=>$followersArr,
            'followings'=>$followingssArr,
        ];

        return response()->json([
            'data' => $data,
            'follows' => $follows,
            'status' => 1,
        ]);
    }
    public function getFollowingDetails(Request $request){
        $following = Followers::getFollowingDetails($request->idUsu);
        return response()->json(['data'=>$following]);
    }
    public function getFollowerDetails(Request $request){
        $following = Followers::getFollowerDetails($request->idUsu);
        return response()->json(['data'=>$following]);
    }

    public function getPostOther(Request $request){

        $posts = DB::table('post')->where('idUsu', '=', $request->idUsu)->get();
        
        $data = [];
        $user;
        $likes;

        
        foreach ($posts as $key => $value) {
            $likes = PostLike::likePost($value->idPost);
            
            array_push($data, [
                'post' => [
                    'component' => $value, 
                    'likes' => $likes,
                    'user' => User::findOrFail($request->idUsu),
                ],
            ]);
        }
        return response()->json([
            'data' => $data,
            'status' => 1,
        ]);

    }


    //Return all likes that the user give 
    public function getLikesGiven(){
        $likes = Auth::user()->getLikesGiven();
        // return response()->json(count($likes));
        //Pass the [{},{}] to [x,x]
        $likesArr = [];
        for ($i=0; $i < count($likes); $i++) { 
            array_push($likesArr, $likes[$i]->idPost);
        }

        return response()->json([
            'data' => $likesArr,
            'status' => 1,
        ]);
    }

    public function getFollowing(Request $request){
        $following = Followers::getFollowing($request->idUsu);
        $followingArr = [];
        //Pass the [{},{}] to [x,x]
        foreach ($following as $key => $value) {
            array_push($followingArr, $value->following);
        }
        
        return response()->json([
            'following' => $followingArr,
        ]);
    }

    public function follow(Request $request){
        if (Followers::follow($request->idUsu)) {
            return response()->json([1]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:user'],
            'password' =>['required'],
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        $file = $request->file('img');
        $path = $request->file('img')->storePublicly('avatars', 'public');
        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'permissions' => 1,
            'img' => $path,
        ]);

        return response()->json([
            'user' => $user
        ]);
    }

    public function login(Request $req){

        $req->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if(Auth::attempt($req->only('email', 'password'))){
            return response()->json([
                'status' => 1,
                'data' => Auth::user(), 
            ], 200);
        }else{
            return response()->json([
                'status' => 0,
                'cod-error' => 'login-error'
            ], 200);
        }

    }

    public function logout(){
        Auth::logout();
    }

    /**
     * Return all of the user if that is autenticated
     * Return permissions=>0 if not is autenticated
     */
    public function auth(Request $req){
        if (Auth::check()) {
            return $req->user();
        }
        $res = ['permissions'=>0];
        return response()->json($res);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::destroy($id);
    }
}
