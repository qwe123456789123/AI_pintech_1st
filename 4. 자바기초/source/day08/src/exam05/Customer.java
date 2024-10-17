package exam05;

public class Customer extends java.lang.Object {
    private int id;
    private String name;
    private String email;

    public Customer(int id, String email, String name) {
        this.id = id;
        this.email = email;
        this.name = name;
    }
    @Override
    public boolean equals(Object obj){
        if (obj instanceof Customer customer){
            if (id == customer.id && name.equals(customer.name)&&
                    email.equals(customer.email))
                return true;
        }
        return false;
    }


    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

