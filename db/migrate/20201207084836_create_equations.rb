class CreateEquations < ActiveRecord::Migration[6.0]
  def change
    create_table :equations do |t|
      t.string :title
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
