# Entity Framework database initialization

With version 4.1 or later Entity Framework provides a useful way for recreate and optionally re-seed the database with data the first time or before the execution of unit test.

For this purpose Microsoft provides some classes:

* CreateDatabaseIfNotExists
* DropCreateDatabaseAlways
* DropCreateDatabaseIfModelChanges

All classes implement interface **IDatabaseInitializer<T>** where T is a **DbContext**.

For example if you want populate database with base information before execute
an unit test you can write code like this:

    public class MyTestIntializer : DropCreateDatabaseAlways<MyContext>
    {
        protected override void Seed( MyContext context )
        {
            var categories = new Lists<Category>();
            var products = new Lists<Product>();

            categories.Add( new Category { Name = "tech" } );
            categories.Add( new Category { Name = "food" } );

            products.Add( new Product { Name = "cpu", Category = categories[0] } );
            products.Add( new Product { Name = "harddisk",
                          Category = categories[0] } );
            products.Add( new Product { Name = "biscuits",
                          Category = categories[1] } );

            addToContext<Category>( context, categories );
            addToContext<Product>( context, products );
        }

        private void addToContext<T>( MyContext context, IList collection )
        {
            foreach( var item in collection )
            {
                context.Set<T>().Add( item );
            }
        }
    }

This data initializer drop (if exists) and create database and finally populate it with categories and products.

Now we can add it to our test class.

    [ClassInitialize()]
    public static void MyClassInitialize( TestContext testContext )
    {
        Database.SetInitializer<MyContext>( new MyTestIntializer() );
    }
