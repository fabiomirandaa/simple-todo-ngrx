# SimpleTodoNgrx
Projeto desenvolvido para servir de estudo para o conceito de Effects. É um WebApp de Todo-list muito simplificado.

Esse projeto foi gerado pelo [Angular CLI](https://github.com/angular/angular-cli). Se encontra na versão 12.1 do Angular.

## Resumo do conceito

Para entendimento deste resumo, você precisa entender os conceitos básicos do Redux. Aviso dado, vamos ao resumo.

Basicamente os Effects é a forma que temos para garantir o tratamento de efeitos colaterais ao dispararmos Actions. Não podemos esquecer que no Redux, os Reducers devem ser feitos com funções puras. 

Então quando criamos um Effect, estamos garantindo que Actions que necessitem de consultas externas,por exemplo, tenham também um tratamento de possíveis erros e possam direcionar o disparo de Actions específicas para momentos de erro.

O Exemplo deste projeto, é o Effect de loadTodos. Vejam:

```typescript
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      switchMap(() => {
        return this.loadAllTodos();
      })
    )
  );

    private loadAllTodos() {
    return this.todoService.getTodos()
    .pipe(
      map((todos) => {
        return { type: TodoActionTypes.LoadTodos, todos };
      }),
      catchError((error) => of({ type: TodoActionTypes.Error, message: error }))
    );
  }

```

Como é possível ver, temos um efeito que monitora a ação de `GetTodos`. Nesse efeito, temos ali no método genérico de carregamento de Todos o tratamento de erro, fazendo com que seja chamada a Action específica de erro caso ocorra algum problema com a chamada HTTP.
