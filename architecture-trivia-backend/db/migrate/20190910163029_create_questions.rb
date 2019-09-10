class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :correct_answer
      t.string :answer1
      t.string :answer2
      t.string :answer3
      t.string :img
      t.string :name

      t.timestamps
    end
  end
end
