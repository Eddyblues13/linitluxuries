<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jewelry_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('jewelry_id');
            $table->string('image');
            $table->foreign('jewelry_id')->references('id')->on('jewelries')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jewelry_images');
    }
};
