class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.string :latex
      t.references :equation. foreign_key: true
      t.timestamps
    end
  end
end
