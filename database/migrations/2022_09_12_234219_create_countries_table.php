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
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('house_id');
            $table->string('name');
            $table->string('slug');
            $table->longText('description')->nullable();
            $table->integer('original_price');
            $table->integer('selling_price');
            $table->tinyInteger('trending')->default('0')->comment('1=trending, 0 = not-trending');             
            $table->foreign('house_id')->references('id')->on('houses')->onDelete('cascade');
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
        Schema::dropIfExists('countries');
    }
};
