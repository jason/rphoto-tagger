class CreateFaces < ActiveRecord::Migration
  def change
    create_table :faces do |t|
      t.string :x
      t.string :y
      t.integer :tag_id

      t.timestamps
    end
  end
end
