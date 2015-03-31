
<form ng-submit="loginSubmit()">

    <md-input-container>
        <label>Usuário</label>
        <input name="usuario" ng-model="usuario" required />
    </md-input-container>

    <md-input-container>
        <label>Senha</label>
        <input type="password" name="senha" ng-model="senha" required />
    </md-input-container>

    <md-button class="md-raised md-primary">Entrar</md-button>

</form>