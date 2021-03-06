<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post', function (Blueprint $table) {
            $table->increments('idPost');
            $table->unsignedInteger('idUsu');
            $table->string('postName');
            $table->longText('script')->nullable();
            $table->longText('html')->nullable();
            $table->longText('css')->nullable();
            $table->longText('js')->nullable();
            $table->string('img')->nullable();
            $table->bigInteger('views');
            $table->string('fork')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('post', function(Blueprint $table){
            $table->foreign('idUsu')
            ->references('idUsu')->on('user')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post');
    }
}
