package exam01;

public enum Transportation {
    SUBWAY("샌드위치"){
        @Override
        public int getTotal(int person) {
            return 1500* person;
        }
    },
    BUS("난폭운전"){
        @Override
        public int getTotal(int person) {
            return 1400*person;
        }
    },
    TAXI("박아지"){
        @Override
        public int getTotal(int person) {
            return 4500*person;
        }
    };

    private final String title; // fianl을 넣어서 상수라는 것을 각인시킨다.?

   Transportation(String title){ // private
        this.title = title;
    }

    public String getTitle() {
       return title;
    }

    public abstract int getTotal(int person); // 추상 메서드가 정의 가능한 추상 메서드
}
